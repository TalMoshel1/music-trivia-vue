import './index.css';
const vars = {
    '--bg-yellow': '#ffc700',
    '--bg-panel': '#fffbe8',
    '--bg-brand': '#c6b9ff',
    '--bg-brand-hover': '#a59bff',
    '--border-main': '#000'
};
for (const [k, v] of Object.entries(vars)) {
    document.documentElement.style.setProperty(k, v);
}
