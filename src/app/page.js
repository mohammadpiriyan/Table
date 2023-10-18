import { Tables } from '@/components'
import Image from 'next/image'

const dataTable = [
  { device: 'Chrome 99.0.4844.84 (Windows)', location: 'IR', IP: '51.158.169.234', date: '1400/12/28 | 22:30', function: { func: '', type: 'button', text: 'delete' } },
  { device: 'Chrome 99.0.4844.84 (Windows)', location: 'IR', IP: '51.158.169.234', date: '1400/12/28 | 22:30', function: { func: '', type: 'button', text: 'delete' } },
  { device: 'Chrome 99.0.4844.84 (Windows)', location: 'IR', IP: '51.158.169.234', date: '1400/12/28 | 22:30', function: { func: '', type: 'button', text: 'delete' } },
];

const headersTable = [
  {
    setter: '#',
    accessor: 'index',
  },
  {
    setter: 'Device',
    accessor: 'device',
  },
  {
    setter: 'Last Entry',
    accessor: 'date',
  },
  {
    setter: 'Location',
    accessor: 'location',
  },
  {
    setter: 'IP Address',
    accessor: 'IP',
  },
  {
    setter: 'Delete',
    accessor: 'function',
  },
];

const styleTable = {
  variants: 'refferal',
  variantTh: 'refferal',
  variantTd: 'refferal',
  variantParent: 'refferal',
}


export default function Home() {
  return (
    <main className="">
      <div className='w-full flex flex-col px-12 mt-20 '>
      <Tables data={dataTable} headers={headersTable} styleTable={styleTable} />
      </div>
    </main>
  )
}
