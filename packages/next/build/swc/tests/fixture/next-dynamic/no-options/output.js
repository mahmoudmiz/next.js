import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../components/hello'), {
  loadableGenerated: {
    webpack: () => [require.resolveWeak('../components/hello')],
    modules: ['some-file.js -> ' + '../components/hello'],
  },
})
