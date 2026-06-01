// To change button style globally: edit .btn-ink / .btn-gold in src/styles/index.css
export default function Btn({ variant = 'ink', href, download, onClick, children, className = '' }) {
  const cls = `btn btn-${variant} ${className}`;
  if (href) return (
    <a href={href} className={cls} download={download}
       target={href.startsWith('http') ? '_blank' : undefined}
       rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
  return <button className={cls} onClick={onClick}>{children}</button>;
}
