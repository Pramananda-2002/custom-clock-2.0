import Head from 'next/head';
// import AnalogClock from './components/MyClock';
import Clock from './components/AnalogClock';
import dynamic from 'next/dynamic';

const AnalogClock = dynamic(()=> import('./components/MyClock'),
  {ssr:false}
) 

const Home: React.FC = () => {
  return (
    <div className="flex gap-20 items-center justify-center min-h-screen bg-gray-800">
      <AnalogClock />
      {/* <Clock /> */}
    </div>
  );
};

export default Home;
