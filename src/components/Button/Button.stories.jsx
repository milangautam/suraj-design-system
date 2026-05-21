import { fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'destructive'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height and padding scale',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and reduces opacity to 40%',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
};

// ─── Individual variant stories ───────────────────────────────────────────────

export const Solid = {
  args: { variant: 'solid', size: 'md' },
};

export const Outline = {
  args: { variant: 'outline', size: 'md' },
};

export const Ghost = {
  args: { variant: 'ghost', size: 'md' },
};

export const Destructive = {
  args: { variant: 'destructive', size: 'md' },
};

// ─── Size stories ─────────────────────────────────────────────────────────────

export const Small = {
  args: { variant: 'solid', size: 'sm' },
};

export const Medium = {
  args: { variant: 'solid', size: 'md' },
};

export const Large = {
  args: { variant: 'solid', size: 'lg' },
};

// ─── State stories ────────────────────────────────────────────────────────────

export const Disabled = {
  args: { variant: 'solid', size: 'md', disabled: true },
};

export const DisabledOutline = {
  name: 'Disabled (Outline)',
  args: { variant: 'outline', size: 'md', disabled: true },
};

// ─── All variants overview ────────────────────────────────────────────────────

export const AllVariants = {
  name: 'All Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-col gap-10 p-8 font-geist">

      {/* ── Variants × States ── */}
      <div>
        <div className="grid text-caption text-text-tertiary mb-6" style={{ gridTemplateColumns: '100px repeat(2, 120px)' }}>
          <span />
          <span>Default</span>
          <span>Disabled</span>
        </div>

        {[
          { label: 'Solid',       variant: 'solid'       },
          { label: 'Outline',     variant: 'outline'     },
          { label: 'Ghost',       variant: 'ghost'       },
          { label: 'Destructive', variant: 'destructive' },
        ].map(({ label, variant }) => (
          <div key={variant} className="grid items-center mb-4" style={{ gridTemplateColumns: '100px repeat(2, 120px)' }}>
            <span className="text-caption text-text-tertiary">{label}</span>
            <Button variant={variant} size="md">Button</Button>
            <Button variant={variant} size="md" disabled>Button</Button>
          </div>
        ))}

        <p className="text-caption text-text-tertiary mt-2">
          Hover and Active states are interactive — hover/click each button in the canvas to see them.
        </p>
      </div>

      {/* ── Size scale ── */}
      <div>
        <p className="text-caption text-text-tertiary uppercase tracking-widest mb-4">Size scale</p>
        <div className="flex items-end gap-4">
          <Button variant="solid" size="sm">Small</Button>
          <Button variant="solid" size="md">Medium</Button>
          <Button variant="solid" size="lg">Large</Button>
        </div>
      </div>

    </div>
  ),
};
