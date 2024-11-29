import React from 'react';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  index: number;
}

export function GameCard({ title, description, imageUrl, category, index }: GameCardProps) {
  return (
    <motion.a 
      href="https://klexou.eu" 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
    >
      <motion.div 
        className="aspect-w-16 aspect-h-9 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-6">
        <motion.span 
          className="text-sm text-blue-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {category}
        </motion.span>
        <motion.h3 
          className="mt-2 text-xl font-semibold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="mt-2 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.a>
  );
}