export function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function SSR() {
  return <div>ssr</div>
}
