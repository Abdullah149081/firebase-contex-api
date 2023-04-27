const Order = () => {
  return (
    <div className=" flex justify-center mt-12">
      <div className="stats bg-purple-600 text-primary-content ">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button type="button" className="btn btn-sm btn-success">
              Add funds
            </button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button type="button" className="btn btn-sm">
              Withdrawal
            </button>
            <button type="button" className="btn btn-sm">
              deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
