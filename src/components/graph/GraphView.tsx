import ForceGraph2D from "react-force-graph-2d"
import { memo, useCallback } from "react"

interface Node {
  id: string
  title: string
  val: number
  group: string
  x?: number
  y?: number
}

interface Link {
  source: string
  target: string
  type: string
}

interface GraphData {
  nodes: Node[]
  links: Link[]
}

interface GraphViewProps {
  data: GraphData
  onNodeClick: (id: string) => void
}

const GraphView = ({ data, onNodeClick }: GraphViewProps) => {

  const handleClick = useCallback((node: any) => {
    onNodeClick(node.id)
  }, [onNodeClick])

  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
      <ForceGraph2D
        graphData={data}
        nodeRelSize={6}
        nodeLabel="title"
        nodeCanvasObject={(node: any, ctx) => {
          const size = node.val * 2
          ctx.beginPath()
          ctx.arc(node.x, node.y, size, 0, 2 * Math.PI)

          ctx.fillStyle =
            node.group === "supports" ? "#10b981" :
            node.group === "contradicts" ? "#ef4444" : "#3b82f6"

          ctx.fill()

          // Add a glowing effect
          ctx.shadowColor = ctx.fillStyle as string
          ctx.shadowBlur = 10

          ctx.fillStyle = "white"
          ctx.font = "4px Inter, sans-serif"
          ctx.textAlign = "center"
          ctx.fillText(node.title.slice(0, 10), node.x, node.y + size + 4)
        }}
        linkColor={(link: any) =>
          link.type === "supports" ? "#10b981" :
          link.type === "contradicts" ? "#ef4444" : "#3b82f6"
        }
        onNodeClick={handleClick}
        backgroundColor="#0f172a"
      />
    </div>
  )
}

export default memo(GraphView)
