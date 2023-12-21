function Footer({ font }) {
  return (
    <div className={`${font.className} text-xs text-center p-5 lg:text-sm lg:text-left lg:pl-24`}>
      <p>&copy; 2023 NADIMweb</p>
    </div>
  );
}

export default Footer;
