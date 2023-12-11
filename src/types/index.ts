export interface Category {
  slug: string
  title: string
  description: string
  cover: string
  color: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  cover: string
  color: string
  categorySlug: string
}
