import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot,
  Timestamp 
} from "firebase/firestore"
import { db } from "./firebase"
import { Idea } from "../types"

const ideasCollection = collection(db, "ideas")

export const createIdea = async (idea: Omit<Idea, "id" | "createdAt">) => {
  return await addDoc(ideasCollection, {
    ...idea,
    createdAt: Timestamp.now()
  })
}

export const streamIdeas = (callback: (ideas: Idea[]) => void) => {
  const q = query(ideasCollection, orderBy("createdAt", "desc"))
  return onSnapshot(q, (snapshot) => {
    const ideas = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Idea[]
    callback(ideas)
  })
}

export const updateIdeaVote = async (id: string, confidenceDelta: number) => {
  const ideaRef = doc(db, "ideas", id)
  // Logic to update score (simplified for this stage)
  await updateDoc(ideaRef, {
    confidenceScore: Math.min(100, Math.max(0, (confidenceDelta)))
  })
}

export const deleteIdea = async (id: string) => {
  const ideaRef = doc(db, "ideas", id)
  await deleteDoc(ideaRef)
}
