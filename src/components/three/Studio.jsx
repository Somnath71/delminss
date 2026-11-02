import { Environment, Lightformer } from '@react-three/drei'

// Offline studio lighting: no HDR download, just soft area lights for reflections.
export default function Studio({ warm = '#ffd08a', rim = '#3cbf68' }) {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 5, 4]} intensity={2.2} color={warm} />
      <pointLight position={[-4, -2, -3]} intensity={30} color={rim} />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, 3]} scale={[8, 2, 1]} color="#fff4de" />
        <Lightformer intensity={2} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[6, 4, 1]} color={warm} />
        <Lightformer intensity={1.5} position={[5, -1, -1]} rotation-y={-Math.PI / 2} scale={[6, 4, 1]} color={rim} />
      </Environment>
    </>
  )
}
