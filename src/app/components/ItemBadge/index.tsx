"use client";


export default function ItemBadge({ icon, title }: { icon: React.ReactNode, title: string }) {
  return(
<div className="inline-flex items-center space-x-1 rounded-full bg-white px-3 py-1 mr-2 my-1">
<div className="text-md mr-2">{icon}</div>
<span className="text-md font-medium">{title}</span>
</div>
  )
}

