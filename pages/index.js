import { Heading, Page, TextStyle, Layout, EmptyState } from "@shopify/polaris";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
const Index = () => (
  <Page>
    <Layout>
      <EmptyState // Empty state component
        heading="Discount your products temporarily"
        action={{
          content: "Select products",
          onAction: () => alert("TODO: Select products"),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
);
export default Index;
