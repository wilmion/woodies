module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary : '#DAA520' ,
          secundary : '#FFC107' ,
          oscure : '#3E3F43'  ,
          claro : '#FFFFFF' , 
          intermediate : '#8D8D8D' , 
          inicio: '#F9BDBD' , 
        },
        borderRadius: {
          '10xl': '200px'
        },
        zIndex: {
          'negative': '-2'
        },
        width: {
          oneThird: '33%',
          half: '50%',
          sixtySeven: '67%',
          seventyFive:'75%'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  