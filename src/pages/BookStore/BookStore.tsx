import React from "react";
import { BookStoreHelper } from "../../helpers"
import { BookStoreService } from "../../services";

export function BookStore() {
  const context = BookStoreHelper.useGetBookStoreList();

  const bookStoreService = new BookStoreService();

  React.useEffect(() => {
    if(!context.isSuccess) return;

    bookStoreService.setBookStoreListsToLocalStorage(context.data.response.body.items.item);
  }, [context.isSuccess])

  return (
    <>
      {context.isSuccess && context.data.response.body.items.item.map((item: any, index: number) => (
        <p key={index}>{item.ADIT_DC}</p>
      ))}
    </>
  )
}