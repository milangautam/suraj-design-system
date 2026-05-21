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

      {/* ── Column headers ── */}
      <div>
        <div className="grid text-caption text-text-tertiary mb-6" style={{ gridTemplateColumns: '80px repeat(4, 120px)' }}>
          <span />
          <span>Default</span>
          <span>Hover*</span>
          <span>Active*</span>
          <span>Disabled</span>
        </div>

        {/* Solid */}
        <div className="grid items-center mb-4" style={{ gridTemplateColumns: '80px repeat(4, 120px)' }}>
          <span className="text-caption text-text-tertiary uppercase tracking-widest">Solid</span>
          <Button variant="solid" size="md">Button</Button>
          <Button variant="solid" size="md" className="bg-solar-600 border-solar-600">Button</Button>
          <Button variant="solid" size="md" className="bg-solar-700 border-solar-700">Button</Button>
          <Button variant="solid" size="md" disabled>Button</Button>
        </div>

        {/* Outline */}
        <div className="grid items-center mb-4" style={{ gridTemplateColumns: '80px repeat(4, 120px)' }}>
          <span className="text-caption text-text-tertiary uppercase tracking-widest">Outline</span>
          <Button variant="outline" size="md">Button</Button>
          <Button variant="outline" size="md" className="bg-solar-50">Button</Button>
          <Button variant="outline" size="md" className="bg-solar-100">Button</Button>
          <Button variant="outline" size="md" disabled>Button</Button>
        </div>

        {/* Ghost */}
        <div className="grid items-center mb-4" style={{ gridTemplateColumns: '80px repeat(4, 120px)' }}>
          <span className="text-caption text-text-tertiary uppercase tracking-widest">Ghost</span>
          <Button variant="ghost" size="md">Button</Button>
          <Button variant="ghost" size="md" className="bg-zinc-100">Button</Button>
          <Button variant="ghost" size="md" className="bg-zinc-200">Button</Button>
          <Button variant="ghost" size="md" disabled>Button</Button>
        </div>

        {/* Destructive */}
        <div className="grid items-center" style={{ gridTemplateColumns: '80px repeat(4, 120px)' }}>
          <span className="text-caption text-text-tertiary uppercase tracking-widest">Destr.</span>
          <Button variant="destructive" size="md">Button</Button>
          <Button variant="destructive" size="md" className="bg-error-600 border-error-600">Button</Button>
          <Button variant="destructive" size="md" className="bg-error-700 border-error-700">Button</Button>
          <Button variant="destructive" size="md" disabled>Button</Button>
        </div>

        <p className="text-caption text-text-tertiary mt-6">* Hover and Active states are interactive — use the Default story and hover/click in the canvas.</p>
      </div>

      {/* ── Size scale ── */}
      <div>
        <p className="text-caption text-text-tertiary uppercase tracking-widest mb-4">Size scale</p>
        <div className="flex items-center gap-4">
          <Button variant="solid" size="sm">Small</Button>
          <Button variant="solid" size="md">Medium</Button>
          <Button variant="solid" size="lg">Large</Button>
        </div>
      </div>

    </div>
  ),
};
