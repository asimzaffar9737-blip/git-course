import Link from "next/link";

export function Navbar() {
  const navlinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/downloads", label: "Downloads" },
  ];

  return (
    <ul>
      {navlinks.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
