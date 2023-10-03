import {faqs} from '../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <div className='mt-[38px]'>
        {
            faqs.map((items, index) => <FaqItem items={items} index={index} key={index}/>)
        }
    </div>
  )
}

export default FaqList