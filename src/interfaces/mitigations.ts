
export interface IMitigationAction {
  id: number
  description: string
  actionList: string
  objectives: string | null
  disasterTypeId: number
  riskLevel: number
  icon: string | null
  address: string | null
  safetyLevel: number | null
  imageUrl: string | null

  createdAt: Date
  updatedAt: Date
  status: boolean
}


export interface IMitigationPlan {
  date: string
  address: string
  mitigationAction: IMitigationAction | null
  dangerIndicator: number
}


