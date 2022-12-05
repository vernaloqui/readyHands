function Footer () {
    const year = new Date().getFullYear();
  
    return <footer className="fixed-bottom p-2 bg-dark text-light">{`Copyright © Ready Hands ${year}`}</footer>;
  };
  
export default Footer;