import Link from 'next/link';

function Footer() {
  const links = [

    { name: 'Documentation', href: '/documentation' },
    { name: 'Github', href: 'https://github.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-black tracking-wider">Open Enterprise</h2>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target='blank' className="text-gray-600 hover:text-primaryBgColor transition duration-150 ease-in-out">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
