function PaginationTest() {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
    }));