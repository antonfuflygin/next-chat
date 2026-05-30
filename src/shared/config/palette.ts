export const chatLayoutPalette = {
  page: 'bg-slate-50',
  workspace: 'bg-gradient-to-b from-white to-slate-50',
  header: 'border-slate-300 bg-white/90',
  title: 'text-slate-950',
  subtitle: 'text-slate-600',
  action: 'border-slate-300 bg-white text-slate-600 hover:bg-sky-100 hover:text-slate-950',
  sidebar: '[&_aside]:border-slate-300 [&_aside]:bg-white',
  composer: '[&_form]:from-slate-100 [&_form]:to-slate-100',
} as const;

export const messageBubblePalette = {
  own: 'bg-sky-200',
  incoming: 'bg-slate-200',
  text: 'text-slate-950',
} as const;

export const chatMessagesPalette = {
  container: 'bg-slate-100',
} as const;

export const messageInputPalette = {
  wrapper: 'border-slate-200 bg-white',
  textarea: 'text-slate-950 placeholder:text-slate-400',
  icon: 'text-slate-600 hover:text-slate-950',
} as const;
