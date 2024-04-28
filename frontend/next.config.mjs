/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc', // The allowed hostname
                port: '',                  // Optional: specify a specific port
                pathname: '/150/**',       // Optional: use a pattern to match paths
            },
        ],
    },
};

export default nextConfig;
