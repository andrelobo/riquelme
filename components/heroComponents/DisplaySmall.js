import Link from 'next/link'
import { getTrimmedString } from '../../utils/helpers'
import Image from '../Image'

const DisplaySmall = ({ link, title, subtitle, imageSrc }) =>  (
  <div className="lg:w-flex-fourth bg-dark
  px-6 pt-10 pb-2 lg:p-6 lg:pb-0
  hover:bg-dark-200 lg:mb-0 mb-4">
    <Link href={link} legacyBehavior>
      <a aria-label={title}>
        <div className="flex flex-column justify-center items-center h-32">
          <Image alt={title} src={imageSrc} className="w-3/5" />
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-1">{title}</p>
          <p className="text-xs text-red-700 mb-4">{getTrimmedString(subtitle, 150)}</p>
        </div>
      </a>
    </Link>
  </div>
)

export default DisplaySmall