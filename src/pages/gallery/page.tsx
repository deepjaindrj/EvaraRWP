// page.tsx or your component file
import Gallery, { GalleryImage } from '../../components/Gallery';
import Footer from '../../components/Footer'

const sampleImages: GalleryImage[] = [
  {
    id: 1,
    src: '/cta_image.png',
    alt: 'Traditional Wedding Ceremony',
    title: 'AKSHAT WEDS BHAVYA',
    description: 'Traditional Indian Wedding Ceremony'
  },
  {
    id: 2,
    src: '/abouthero.png',
    alt: 'Mandap Ceremony',
    title: 'SACRED VOWS',
    description: 'Beautiful Mandap Decoration'
  },
  {
    id: 3,
    src: '/service01.jpg',
    alt: 'Reception',
    title: 'CELEBRATION',
    description: 'Wedding Reception'
  },
  {
    id: 4,
    src: '/service02.jpg',
    alt: 'Family Portrait',
    title: 'BLESSED MOMENTS',
    description: 'Family Gathering'
  },
  {
    id: 5,
    src: '/service03.jpg',
    alt: 'Ring Ceremony',
    title: 'RING CEREMONY',
    description: 'Exchange of Rings'
  },
  {
    id: 6,
    src: '/service04.jpg',
    alt: 'Mehendi Ceremony',
    title: 'MEHENDI CELEBRATION',
    description: 'Henna Ceremony'
  },
  {
    id: 7,
    src: '/service05.jpg',
    alt: 'Sangam',
    title: 'SANGAM CEREMONY',
    description: 'Union of Families'
  },
  {
    id: 8,
    src: '/service06.jpg',
    alt: 'Departure',
    title: 'VIDAAI',
    description: 'Farewell Ceremony'
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF1]">
      <div className="w-full">
               
        <Gallery 
          images={sampleImages} 
        />
        <Footer />
      </div>
    </div>
  );
}
