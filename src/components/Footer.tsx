import Link from "next/link";

export function Footer() {
  const navlinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/downloads", label: "Downloads" },
  ];

  return (
    <div>
        <h1 className="text-5xl text-green-300">Footer</h1>

    <ul>
      {navlinks.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
