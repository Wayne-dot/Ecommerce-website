import React from "react";

const Account = () => {




    const handleSubmit = async(event) => {
        event.preventDefault()
    }

    return (
        // <div>
        //     <h1>Post a product</h1>
        //     <form>
        //         <label>Proudct name</label>
        //         <input />
        //         <label>Price</label>
        //         <input />
        //         <label>Description</label>
        //         <input />
        //         <label>StockQuantiity</label>
        //         <input />


        //         {/* upload image */}

        //         <button>Submit</button>
        //     </form>
        // </div>
    <div class="flex items-center justify-center p-12">

    <div class="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Product name
                </label>
                <input type="text" name="name" id="name" placeholder="Product name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Price
                </label>
                <input type="text" name="phone" id="phone" placeholder="Your price in USD"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Description
                </label>
                <input type="email" name="email" id="email" placeholder="First description"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            
                <input type="email" name="email" id="email" placeholder="Second description"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            
                <input type="email" name="email" id="email" placeholder="Third description"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            

            {/* StockQuantiity */}


            

            <div>
                <button
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit
                </button>
            </div>
        </form>
        </div>
    </div>
    );
}


export default Account;

