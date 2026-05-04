import Script from "next/script"

type Props = {
  containerId: string
  scriptSrc: string
  className?: string
}

export default function AdsterraSlot({ containerId, scriptSrc, className }: Props) {
  return (
    <div className={className}>
      <div className="adsterra-slot">
        <div id={containerId} />
        <Script async data-cfasync="false" src={scriptSrc} strategy="afterInteractive" />
      </div>
    </div>
  )
}

