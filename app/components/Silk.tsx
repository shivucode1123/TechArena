'use client';

import { useEffect, useRef } from 'react';

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0, 0, 0];
}

export default function Silk({
  speed = 5,
  scale = 1,
  color = '#280665',
  noiseIntensity = 1.5,
  rotation = 0,
  className = '',
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vertSrc = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    const fragSrc = `
      precision highp float;
      uniform float u_time;
      uniform float u_speed;
      uniform float u_scale;
      uniform vec3  u_color;
      uniform float u_noise;
      uniform float u_rot;
      uniform vec2  u_res;

      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
      }

      float gnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(dot(hash2(i),           f),
              dot(hash2(i+vec2(1,0)), f-vec2(1,0)), u.x),
          mix(dot(hash2(i+vec2(0,1)), f-vec2(0,1)),
              dot(hash2(i+vec2(1,1)), f-vec2(1,1)), u.x),
          u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0, a = 0.5, fr = 1.0;
        for (int i = 0; i < 6; i++) {
          v  += a * gnoise(p * fr);
          a  *= 0.5;
          fr *= 2.0;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_res;
        float c = cos(u_rot), s = sin(u_rot);
        vec2 ctr = vec2(0.5);
        vec2 ruv = vec2(
          c*(uv.x-ctr.x) - s*(uv.y-ctr.y) + ctr.x,
          s*(uv.x-ctr.x) + c*(uv.y-ctr.y) + ctr.y
        );
        vec2 p = ruv * u_scale;
        float t = u_time * u_speed * 0.05;

        vec2 q = vec2(fbm(p + t*0.3), fbm(p + vec2(1.7,9.2) + t*0.2));
        vec2 r = vec2(
          fbm(p + 4.0*q + vec2(1.7,9.2) + t*0.15),
          fbm(p + 4.0*q + vec2(8.3,2.8) + t*0.1)
        );

        float n = fbm(p + 4.0*r);
        n = n * 0.5 + 0.5;
        n = pow(n, 1.0 / max(u_noise, 0.01));

        float sheen = fbm(p*3.0 + t*0.5)*0.5 + 0.5;

        vec3 dark   = u_color * 0.3;
        vec3 bright = u_color * 2.5;
        vec3 col    = mix(dark, bright, n);
        col = mix(col, col*(0.8 + sheen*0.4), 0.5);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function mkShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    const vert = mkShader(gl.VERTEX_SHADER, vertSrc);
    const frag = mkShader(gl.FRAGMENT_SHADER, fragSrc);
    if (!vert || !frag) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime     = gl.getUniformLocation(prog, 'u_time');
    const uSpeed    = gl.getUniformLocation(prog, 'u_speed');
    const uScale    = gl.getUniformLocation(prog, 'u_scale');
    const uColor    = gl.getUniformLocation(prog, 'u_color');
    const uNoise    = gl.getUniformLocation(prog, 'u_noise');
    const uRot      = gl.getUniformLocation(prog, 'u_rot');
    const uRes      = gl.getUniformLocation(prog, 'u_res');

    const rgb = hexToRgb(color);

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth  || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    const start = Date.now();
    let rafId: number;

    function render() {
      const t = (Date.now() - start) / 1000;
      gl!.uniform1f(uTime,  t);
      gl!.uniform1f(uSpeed, speed);
      gl!.uniform1f(uScale, scale);
      gl!.uniform3f(uColor, rgb[0], rgb[1], rgb[2]);
      gl!.uniform1f(uNoise, noiseIntensity);
      gl!.uniform1f(uRot,   rotation);
      gl!.uniform2f(uRes,   canvas!.width, canvas!.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      gl!.deleteProgram(prog);
    };
  }, [speed, scale, color, noiseIntensity, rotation]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
