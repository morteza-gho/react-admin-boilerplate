import { FC } from "react";
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import Dragger from 'antd/lib/upload/Dragger';

interface IPropTypes {
  type: 'simple' | 'dragger',
  title: string,
  maxSize: number,
  className?: string
}

const DsUploadArea: FC<IPropTypes> = ({ type = 'dragger', title, maxSize, className }) => {
  return (
    <div className={`upload-area-wrapper ${className ? className : ''}`}>
      {
        type === 'dragger' ?
          <Dragger>
            <HiOutlineArrowUpTray className='icon' />
            <p className='title'>{title}</p>
            <p className='subtitle'>Max: {maxSize}MB</p>
          </Dragger>
          :
          <div className="upload-area">
            <HiOutlineArrowUpTray className='icon' />
            <p className='title'>{title}</p>
            <p className='subtitle'>Max: {maxSize}MB</p>
            <input type="file" className='file-input' />
          </div>
      }
    </div>
  )
};

export default DsUploadArea;