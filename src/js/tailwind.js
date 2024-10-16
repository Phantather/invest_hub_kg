tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#150134',
                orange: '#E58021',
                secondOrange: '#FDBF3D',
                primaryBlack: '#151515',
                secondBlack: '#1F1F1F',
                white: '#F2F2F2',
                gray: '#CDC2C2'
            }
        },
        screens: {
            md: { max: '1024px' },
            sm: { max: '768px' },
            xs: { max: '568px' },
        },
    }
}