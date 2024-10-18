/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Semantic color system
        primary: {
          DEFAULT: '#1E40AF', // Blue
          light: '#0492E1', // Light Blue
          dark: '#1E3A8A', // Dark Blue
        },
        secondary: {
          DEFAULT: '#9333EA', // Purple
          light: '#C084FC', // Light Purple
          dark: '#7E22CE', // Dark Purple
        },
        accent: {
          DEFAULT: '#F97316', // Orange
          light: '#FDBA74', // Light Orange
          dark: '#C2410C', // Dark Orange
        },
        neutral: {
          100: '#F3F4F6', // Light Gray
          200: '#E5E7EB',
          300: '#C1C7CD',
          400: '#9CA3AF',
          500: '#6B7280', // Mid Gray
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937', // Dark Gray
          900: '#111827',
        },
        earmark:'#011E41',
        title:'#21272a',
        description:'#21272a',
        success: '#10B981', // Green for success
        warning: '#F59E0B', // Yellow for warnings
        error: '#DA1E28', // Red for errors
        info: '#3B82F6', // Blue for information
      },
      fontFamily: {
        // Semantic font system
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Menlo', 'monospace'],
      },
      fontSize: {
        // Typical web font sizes
        xs: ['12px', { lineHeight: '16px' }], // Small text
        sm: ['14px', { lineHeight: '20px' }], // Small body text
        base: ['16px', { lineHeight: '24px' }], // Default body text
        lg: ['18px', { lineHeight: '28px' }], // Large body text
        xl: ['20px', { lineHeight: '28px' }], // Small heading
        '2xl': ['24px', { lineHeight: '32px' }], // Heading
        '3xl': ['30px', { lineHeight: '36px' }], // Large heading
        '4xl': ['36px', { lineHeight: '40px' }], // Very large heading
        '5xl': ['48px', { lineHeight: '1' }], // Huge headings
        '6xl': ['60px', { lineHeight: '1' }], // Hero headings
        '7xl': ['72px', { lineHeight: '1' }], // Display sizes
      },
      spacing: {
        // Semantic spacing
        sm: '8px', // Small spacing
        md: '16px', // Medium spacing
        lg: '24px', // Large spacing
        xl: '32px', // Extra-large spacing
      },
      borderRadius: {
        sm: '4px', // Small radius
        md: '8px', // Medium radius
        lg: '16px', // Large radius
      },
      boxShadow: {
        // Semantic shadow system
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      // Grid Configuration
      gridTemplateColumns: {
        // 12-column grid system
        12: 'repeat(12, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
      },
      gridColumn: {
        // For spanning across different numbers of columns
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      gap: {
        // Define semantic gutter spacing
        sm: '16px', // 1rem
        md: '24px', // 1.5rem
        lg: '32px', // 2rem
        xl: '40px', // 2.5rem
      },
      screens: {
        // Define breakpoints
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // 2x large screens
      },
    },
  },
  plugins: [],
};
