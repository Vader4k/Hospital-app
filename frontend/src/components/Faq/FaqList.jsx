import {faqs} from '../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <div className='mt-[38px]'>
        {
            faqs.map((item, index) => <FaqItem items={item} key={item.id}/>)
        }
    </div>
  )
}

export default FaqList