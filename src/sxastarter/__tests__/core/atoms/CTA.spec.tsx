import CTA, { CTAProps } from '@/core/atoms/CTA/CTA';
import { render } from '@testing-library/react';

describe('CTA', () => {
  it('should render primary CTA with correct link and text', () => {
    const props: CTAProps = {
      fields: {
        link: {
          value: {
            href: 'https://example.com',
            text: 'Click me',
          },
        },
        category: {
          value: 'primary',
        },
      },
    };
    const rendered = render(<CTA {...props} />);
    const cta = rendered.getByTestId('cta-detail');
    expect(cta.getAttribute('href')).toEqual('https://example.com');
    expect(cta.classList).toContain('btn-primary');
  });

  it('should render secondary CTA with target attribute', () => {
    const props: CTAProps = {
      fields: {
        link: {
          value: {
            href: 'https://example.com',
            text: 'Open in new tab',
            target: '_blank',
          },
        },
        category: {
          value: 'secondary',
        },
      },
    };
    const rendered = render(<CTA {...props} />);
    const cta = rendered.getByTestId('cta-detail');
    expect(cta.getAttribute('href')).toEqual('https://example.com');
    expect(cta.getAttribute('target')).toEqual('_blank');
    expect(cta.classList).toContain('btn-secondary');
  });

  it('should render tertiary CTA without target attribute', () => {
    const props: CTAProps = {
      fields: {
        link: {
          value: {
            href: 'https://example.com',
            text: 'Learn more',
          },
        },
        category: {
          value: 'tertiary',
        },
      },
    };
    const rendered = render(<CTA {...props} />);
    const cta = rendered.getByTestId('cta-detail');
    expect(cta.getAttribute('href')).toEqual('https://example.com');
    expect(cta.hasAttribute('target')).toEqual(false);
    expect(cta.classList).toContain('btn-tertiary');
  });

  it('should handle empty link text', () => {
    const props: CTAProps = {
      fields: {
        link: {
          value: {
            href: 'https://example.com',
            text: '',
          },
        },
        category: {
          value: 'primary',
        },
      },
    };
    const { container } = render(<CTA {...props} />);
    const cta = container.querySelector('a');
    expect(cta?.getAttribute('href')).toEqual('https://example.com');
    expect(cta).toBeNull();
  });
});
