// pages/ShoppingCart.tsx or your component file
import { Heart, Trash2 } from "lucide-react"
import Image from "next/image"
import { Alert, AlertCircle, AlertDescription } from "./Alert"




export default function Delivery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Free Delivery Banner */}
      <div className="bg-gray-50 py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <span>Free Delivery</span>
            <span className="text-gray-600">Applies to orders of ₹14,995.00 or more</span>
          </div>
          <button className="text-gray-600 underline">View Details</button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Cart Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bag Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Bag</h2>
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/images/order1.png"
                      alt="Nike DRI-FIT ADV TechKnit Ultra"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Nike DRI-FIT ADV TechKnit Ultra</h3>
                        <p className="text-sm text-gray-500">Mens Short-Sleeve Running Top</p>
                        <p className="text-sm text-gray-500">Ashen Slate/Glacier Blue</p>
                        <div className="mt-1 flex gap-4 text-sm text-gray-500">
                          <p>Size: L</p>
                          <p>Quantity: 1</p>
                        </div>
                      </div>
                      <p className="font-medium">₹3995.00</p>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-600">
                        <Heart className="h-4 w-4" />
                        Favorite
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-600">
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/images/item1.png"
                      alt="Nike Air Max 97 SE"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Nike Air Max 97 SE</h3>
                        <p className="text-sm text-gray-500">Mens Shoes</p>
                        <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                        <div className="mt-1 flex gap-4 text-sm text-gray-500">
                          <p>Size: 9</p>
                          <p>Quantity: 1</p>
                        </div>
                      </div>
                      <p className="font-medium">₹16995.00</p>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-600">
                        <Heart className="h-4 w-4" />
                        Favorite
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-600">
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Favourites Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Favourites</h2>
              <Alert className="mt-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  There are no items saved to your favourites.
                </AlertDescription>
              </Alert>
            </section>

            {/* You Might Also Like Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">You Might Also Like</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/images/delivery.png"
                      alt="Air Jordan 1 Mid SE Craft"
                      height={432}
                      width={432}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                    <p className="text-sm text-gray-500">Mens Shoes</p>
                    <p className="mt-1 font-medium">₹12295.00</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Summary Section */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹20990.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Estimated Delivery & Handling</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹20990.00</span>
                  </div>
                </div>
                <button className="w-full bg-black p-2 text-white  rounded-3xl">
                  Member Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
