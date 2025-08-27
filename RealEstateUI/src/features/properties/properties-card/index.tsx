export const PropertiesCard = () => {
    return (
        <div className="flex items-stretch justify-between gap-4 rounded-xl p-4">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-accent-light text-sm font-normal leading-normal">House for sale</p>
                <p className="text-neutral text-base font-bold leading-tight">House in the countryside</p>
                <p className="text-accent-light text-sm font-normal leading-normal">Main Street 123, Town, Province</p>
            </div>
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-secondary text-neutral text-sm font-medium leading-normal w-fit"
            >
                <span className="truncate">$250,000</span>
            </button>
            </div>
            <div
                className="w-28 h-28 bg-center bg-no-repeat bg-cover rounded-xl shrink-0"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMA_sGgBRllYdBC8JyGBJzaQJcMDBmbDIN2UNSfUjNv2beacH-tHaoiPkJIM0UoDe4aZT1L6dYukdSOsCL9JaPjVzhXJ9aypDZxI5Ax2zge5thA5KtWtpQ3Ckk2EleEipFGexlmeO0opUHf5oY5zDE0lRDSbKEd7TYmK4TaFYybGlr1maNl6kVOMye4pb55RhXLQSrOuKd9SjQtha6cF7m-8YrDlyIc9bKUMsBjqzjHrE4kpYK2bgky1ttAML8JSbr60InssHEdg")' }}
            />
        </div>
    )
}
