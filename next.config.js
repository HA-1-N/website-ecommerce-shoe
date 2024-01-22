/** @type {import('next').NextConfig} */

const generateImageDomains = () => {
  // Logic để sinh ra danh sách các domain dựa trên nhu cầu của bạn
  const domains = [
    'www.google.com',
    'example.com',
    'res.cloudinary.com',
    'huge-shoes-n-bags.myshopify.com',
    'andit.co',
  ];
  return domains;
};

const nextConfig = {
  images: {
    domains: generateImageDomains(),
  },
};

module.exports = nextConfig;
