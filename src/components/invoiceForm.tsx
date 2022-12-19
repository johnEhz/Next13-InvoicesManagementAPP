import React, { useEffect } from "react";

interface InvoiceFormProps {
  invoiceID?: string | undefined;
  show: boolean;
  toggleShow: () => void;
}

const InvoiceForm = ({ invoiceID, show, toggleShow }: InvoiceFormProps) => {
  useEffect(() => {
    console.log("Infoice form Rendered!");
  }, []);

  return (
    <div
      onClick={(e) => toggleShow()}
      className={`inset-0 fixed bg-black bg-opacity-50 ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`dark:bg-[#141625] bg-white md:max-w-2xl pt-20 md:pt-0 w-full ${
          show ? "w-full" : "w-0"
        } h-screen overflow-y-auto md:pl-20 rounded-r-2xl`}
      >
        <div className="py-10 px-4 sm:px-10 flex flex-col gap-12">
          <h1 className="text-2xl text-black dark:text-white tracking-wider">
            {invoiceID ? `Edit ${invoiceID}` : "New Invoice"}
          </h1>
          <form className="w-full flex flex-col gap-8 text-black dark:text-neutral-300 text-sm">
            <div className="flex flex-col gap-6">
              <h5 className="text-[#7C5FF8] font-semibold text-md col-span-2">
                Bill from
              </h5>
              <div className="grid grid-cols-2 grid-rows-3 gap-4">
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Street Address</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-1 row-span-1">
                  <label htmlFor="street-address">City</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-1 row-span-1">
                  <label htmlFor="street-address">Post Code</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Country</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-[#7C5FF8] font-semibold text-md col-span-2">
                Bill To
              </h5>
              <div className="grid grid-cols-2 grid-rows-7 gap-4">
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Client&apos;s Name</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Client&apos;s Email</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Street Address</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-1 row-span-1">
                  <label htmlFor="street-address">City</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-1 row-span-1">
                  <label htmlFor="street-address">Post Code</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Country</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Invoice Date</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Payment Terms</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
                <div className="formControlContainer col-span-2 row-span-1">
                  <label htmlFor="street-address">Project Description</label>
                  <input
                    className="text-black dark:text-white bg-gray-50 dark:bg-[#1E213B] border-neutral-200 dark:border-[#313766] formInput"
                    id="street-address"
                    name="street-address"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div></div>
            <div className="flex flex-row justify-end items-center gap-3 text-white font-semibold">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleShow();
                }}
                className="bg-[#1E213B] px-5 py-3 rounded-full hover:bg-[#282c4f] transition-colors"
              >
                Cancel
              </button>
              <button className="bg-[#7C5FF8] px-5 py-3 rounded-full hover:bg-[#6d54dc] transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
