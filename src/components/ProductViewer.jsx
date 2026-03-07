import React, { Suspense } from 'react'
import { useMacBookStore } from '../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacBookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    const colorName = color === '#adb5bd' ? 'Silver' : 'Space Black';
    const sizeName = scale === 0.06 ? '14"' : '16"';

    return (
        <section id="product-viewer">
            <h2>Take a closer look</h2>

            <div className='controls w-full flex flex-col items-center'>
                <p className='text-center text-lg md:text-xl font-semibold mb-5'>MackBookPro {sizeName} in {colorName}</p>

                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}>
                        </div>
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}>
                        </div>
                    </div>

                    <div className='size-control'>
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id='canvas' className='!w-full !h-[80vh] lg:!h-dvh relative z-40' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                <Suspense fallback={null}>
                    <StudioLights />
                    <ModelSwitcher scale={scale} isMobile={isMobile} />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default ProductViewer