
const Top = () => {
    const links = [
        {title: "Pricing",
        href: "#"},
        {
            title: "Guide",
            href: "#"
        }, {
            title: "Login",
            href: "#"
        }
    ]
  return (
    <div className='navbar-root'>
        <div className="logo">ShopSphere</div>
        <div className="links">
            {links.map((link, idx) => (
                <a className="links-items" key={link.title} href={link.href}>{link.title}</a>
            ))}

            <button className="btn">Create account</button>
        </div>
    </div>
  )
}

export default Top