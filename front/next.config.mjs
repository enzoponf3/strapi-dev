/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'localhost',
            port: '1337',
            pathname: '/**',
            search: '',
          },
        ],
        domains:['localhost']
      }
};

export default nextConfig;
