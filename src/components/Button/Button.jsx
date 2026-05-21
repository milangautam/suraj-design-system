import React from 'react';
import PropTypes from 'prop-types';

// ─── Base classes shared by every button ─────────────────────────────────────
const base = [
  'inline-flex items-center justify-center',
  'font-geist font-medium',
  'border border-solid',
  'transition-colors duration-150',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'disabled:opacity-40 disabled:pointer-events-none',
  'cursor-pointer',
].join(' ');

// ─── Variant-specific classes ─────────────────────────────────────────────────
//
// Contrast ratios against WCAG AA (4.5:1 for normal text):
//   solid       — zinc-900 on solar-500  → 5.67:1  ✓
//   outline     — solar-700 on white     → 5.75:1  ✓  (solar-500 text only 3.06:1)
//   ghost       — zinc-900 on white      → 18.1:1  ✓
//   destructive — white on error-600     → 4.67:1  ✓  (error-500 background only 3.59:1)
//
const variantClasses = {
  solid: [
    'bg-solar-500 text-zinc-900 border-solar-500',
    'hover:bg-solar-600 hover:border-solar-600',
    'active:bg-solar-700 active:border-solar-700',
    'focus-visible:ring-solar-500',
  ].join(' '),

  outline: [
    'bg-transparent text-solar-700 border-solar-500',
    'hover:bg-solar-50',
    'active:bg-solar-100',
    'focus-visible:ring-solar-500',
  ].join(' '),

  ghost: [
    'bg-transparent text-text-primary border-transparent',
    'hover:bg-zinc-100 dark:hover:bg-zinc-800',
    'active:bg-zinc-200 dark:active:bg-zinc-700',
    'focus-visible:ring-zinc-500',
  ].join(' '),

  destructive: [
    'bg-error-600 text-white border-error-600',
    'hover:bg-error-700 hover:border-error-700',
    'active:bg-error-800 active:border-error-800',
    'focus-visible:ring-error-500',
  ].join(' '),
};

// ─── Size-specific classes ────────────────────────────────────────────────────
// Sizes map exactly to the Suraj spacing + radius tokens:
//   sm  →  h-8 (32px)  · px-3 (12px)  · gap-1 (4px)  · rounded (4px)   · text-label
//   md  →  h-10 (40px) · px-4 (16px)  · gap-2 (8px)  · rounded-md (8px) · text-body
//   lg  →  h-12 (48px) · px-5 (20px)  · gap-2 (8px)  · rounded-md (8px) · text-body-lg
const sizeClasses = {
  sm: 'h-8  px-3 gap-1 rounded    text-label',
  md: 'h-10 px-4 gap-2 rounded-md text-body',
  lg: 'h-12 px-5 gap-2 rounded-md text-body-lg',
};

// ─── Component ────────────────────────────────────────────────────────────────
export function Button({
  variant  = 'solid',
  size     = 'md',
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  children,
}) {
  const classes = [base, variantClasses[variant], sizeClasses[size]].join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
    </button>
  );
}

Button.propTypes = {
  variant:      PropTypes.oneOf(['solid', 'outline', 'ghost', 'destructive']),
  size:         PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled:     PropTypes.bool,
  leadingIcon:  PropTypes.node,
  trailingIcon: PropTypes.node,
  onClick:      PropTypes.func,
  children:     PropTypes.node,
};
