'use server'

import { connectToDatabase } from '@/lib/db'
import Product from '@/lib/db/models/product.model'

export async function getAllCategories() {
  await connectToDatabase()
  const categories = await Product.find({ isPublished: true }).distinct('category')
  return categories
}

export async function getProductsForCard({
  tag,
  limit = 4,
}: {
  tag: string
  limit?: number
}) {
  await connectToDatabase()
  const products = await Product.find(
    { tags: { $in: [tag] }, isPublished: true },
    {
      name: 1,
      slug: 1,
      images: 1,
    }
  )
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean()

  return products.map((p) => ({
    name: p.name,
    href: `/product/${p.slug}`,
    image: Array.isArray(p.images) ? p.images[0] : '',
  })) as {
    name: string
    href: string
    image: string
  }[]
}
