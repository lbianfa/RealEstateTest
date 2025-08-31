import { useEffect, useRef, useState } from "react";
import { PropertiesHeader } from "../../features/properties/header";
import { PropertiesList } from "../../widgets/properties/list";
import { useInfiniteProperties } from "./query";
import debounce from "lodash.debounce";
import { ToastContainer, toast } from "react-toastify";

export const PropertiesPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } = useInfiniteProperties(5, {
    name,
    address,
    minPrice,
    maxPrice,
  });
  const items = data?.pages.flatMap((p) => p.items) ?? [];

  useEffect(() => {
    if (isError) {
      toast.error("Error to load properties", { toastId: "properties-error" });
    }
  }, [isError, error]);

  useEffect(() => {
    if (!isLoading && !isError && items.length === 0) {
      toast.warn("No properties found", { toastId: "properties-empty" });
    }
  }, [isLoading, isError, items.length]);

  const debouncedSetNameRef = useRef<ReturnType<typeof debounce> | null>(null);
  if (!debouncedSetNameRef.current) {
    debouncedSetNameRef.current = debounce((value: string) => {
      setName(value);
    }, 400);
  }

  const onSearchByName = (value: string) => {
    debouncedSetNameRef.current?.(value);
  }

  const debouncedSetAddressRef = useRef<ReturnType<typeof debounce> | null>(null);
  if (!debouncedSetAddressRef.current) {
    debouncedSetAddressRef.current = debounce((value: string) => {
      setAddress(value);
    }, 400);
  }

  const onSearchByAddress = (value: string) => {
    debouncedSetAddressRef.current?.(value);
  }

  const debouncedSetPriceRef = useRef<ReturnType<typeof debounce> | null>(null);
  if (!debouncedSetPriceRef.current) {
    debouncedSetPriceRef.current = debounce((min?: number, max?: number) => {
      if (typeof min === "number" && !Number.isNaN(min)) setMinPrice(min);
      if (typeof max === "number" && !Number.isNaN(max)) setMaxPrice(max);
    }, 400);
  }

  const onPriceChange = (min: number, max: number) => {
    debouncedSetPriceRef.current?.(min, max);
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-primary dark overflow-hidden"
    >
        <PropertiesHeader
          onSearchByName={onSearchByName}
          onSearchByAddress={onSearchByAddress}
          onPriceChange={onPriceChange}
        />
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px]">
          <PropertiesList
            properties={items}
            onLoadMore={() => fetchNextPage()}
            hasNextPage={!!hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isLoading={isLoading}
          />
        </div>
        <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar theme="dark" />
    </div>
  )
}
