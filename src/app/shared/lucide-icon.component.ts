import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as lucide from 'lucide';

/**
 * Generic Lucide icon wrapper for Angular
 * Works with lucide >= 0.460+
 */
@Component({
  selector: 'lucide-icon',
  standalone: true,
  template: '',
})
export class LucideIconComponent implements OnInit {
  @Input() name: string = '';
  @Input() size: number = 20;
  @Input() strokeWidth: number = 2;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const iconName = this.name as keyof typeof lucide;
    const iconNode = lucide[iconName];

    if (!iconNode) {
      console.warn(`Lucide icon "${this.name}" not found.`);
      return;
    }

    // Create SVG element manually
    const svg = this.renderer.createElement('svg', 'svg');
    this.renderer.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.renderer.setAttribute(svg, 'width', this.size.toString());
    this.renderer.setAttribute(svg, 'height', this.size.toString());
    this.renderer.setAttribute(svg, 'stroke', 'currentColor');
    this.renderer.setAttribute(svg, 'fill', 'none');
    this.renderer.setAttribute(svg, 'stroke-width', this.strokeWidth.toString());
    this.renderer.setAttribute(svg, 'stroke-linecap', 'round');
    this.renderer.setAttribute(svg, 'stroke-linejoin', 'round');

    // Add child elements from Lucide's icon node
    const [tag, attrs, children] = iconNode as any;
    this._appendSvgElement(svg, tag, attrs, children);

    this.renderer.appendChild(this.el.nativeElement, svg);
  }

  private _appendSvgElement(parent: any, tag: string, attrs: any, children: any) {
    const elem = this.renderer.createElement(tag, 'svg');
    for (const [key, value] of Object.entries(attrs || {})) {
      this.renderer.setAttribute(elem, key, String(value));
    }

    if (children && Array.isArray(children)) {
      for (const child of children) {
        this._appendSvgElement(elem, child[0], child[1], child[2]);
      }
    }

    this.renderer.appendChild(parent, elem);
  }
}
