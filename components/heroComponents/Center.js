import { Button } from '../';
import { useRouter } from 'next/router'

const Center = ({ price, title, link }) => {
  const router = useRouter()
  function navigate() {
    router.push(link)
  }
  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{title}</p>
      <p className="py-6 tracking-wide">APARTIR DE <span>${price}</span></p>
      <Button
        onClick={navigate}
        title="Compre agora!"
      />
    </div>
  )
}

export default Center