const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="border-t border-[#eaeaea] dark:border-gray-700">
        <div className="py-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Allen Alipio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
