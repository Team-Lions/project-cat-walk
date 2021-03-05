import React from 'react';
import AddToCart from './AddToCart.jsx'; //props are:
//style = currently selected style object. To passed into Add to Cart.
//productStyles = all available styles for current product. To be passed into StyleSelector.

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productStyles: [],
      selectedStyle: {},
      productInfo: {}
    };
  }

  changeStyle(e) {//event handler function to be passed down to style selector.
    //when a new selection is made this will run and update the state as needed
  }

  getStyles(productId) {
    //request to get all the styles available on single/specified product
    //returns a promise
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/styles`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: productId
      }
    });
  }

  getProductInfo(productId) {
    //request to get all product info for specified product
    //returns a promise
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: productId
      }
    });
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/React.createElement(AddToCart, {
      skus: this.state.selectedStyle.skus
    });
  }

}

export default Overview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQWRkVG9DYXJ0IiwiT3ZlcnZpZXciLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJwcm9kdWN0U3R5bGVzIiwic2VsZWN0ZWRTdHlsZSIsInByb2R1Y3RJbmZvIiwiY2hhbmdlU3R5bGUiLCJlIiwiZ2V0U3R5bGVzIiwicHJvZHVjdElkIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidG9rZW4iLCJwYXJhbXMiLCJwcm9kdWN0X2lkIiwiZ2V0UHJvZHVjdEluZm8iLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsInNrdXMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGlCQUF0QixDLENBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFFBQU4sU0FBdUJGLEtBQUssQ0FBQ0csU0FBN0IsQ0FBdUM7QUFDckNDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsYUFBYSxFQUFFLEVBREo7QUFFWEMsTUFBQUEsYUFBYSxFQUFFLEVBRko7QUFHWEMsTUFBQUEsV0FBVyxFQUFFO0FBSEYsS0FBYjtBQUtEOztBQUVEQyxFQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBSSxDQUNiO0FBQ0E7QUFDRDs7QUFFREMsRUFBQUEsU0FBUyxDQUFDQyxTQUFELEVBQVk7QUFDbkI7QUFDQTtBQUNBLFdBQU9DLEtBQUssQ0FBQ0MsR0FBTixDQUFXLCtEQUE4REYsU0FBVSxTQUFuRixFQUE2RjtBQUNsR0csTUFBQUEsT0FBTyxFQUFFO0FBQ1AseUJBQWlCQztBQURWLE9BRHlGO0FBSWxHQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSjBGLEtBQTdGLENBQVA7QUFRRDs7QUFFRE8sRUFBQUEsY0FBYyxDQUFDUCxTQUFELEVBQVk7QUFDeEI7QUFDQTtBQUNBLFdBQU9DLEtBQUssQ0FBQ0MsR0FBTixDQUFXLCtEQUE4REYsU0FBVSxFQUFuRixFQUFxRjtBQUMxRkcsTUFBQUEsT0FBTyxFQUFFO0FBQ1AseUJBQWlCQztBQURWLE9BRGlGO0FBSTFGQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSmtGLEtBQXJGLENBQVA7QUFRRDs7QUFFRFEsRUFBQUEsaUJBQWlCLEdBQUcsQ0FFbkI7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLG9CQUFDLFNBQUQ7QUFBVyxNQUFBLElBQUksRUFBRSxLQUFLaEIsS0FBTCxDQUFXRSxhQUFYLENBQXlCZTtBQUExQyxNQURGO0FBR0Q7O0FBakRvQzs7QUFvRHZDLGVBQWVyQixRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9BZGRUb0NhcnQuanN4JztcblxuLy9wcm9wcyBhcmU6XG4vL3N0eWxlID0gY3VycmVudGx5IHNlbGVjdGVkIHN0eWxlIG9iamVjdC4gVG8gcGFzc2VkIGludG8gQWRkIHRvIENhcnQuXG4vL3Byb2R1Y3RTdHlsZXMgPSBhbGwgYXZhaWxhYmxlIHN0eWxlcyBmb3IgY3VycmVudCBwcm9kdWN0LiBUbyBiZSBwYXNzZWQgaW50byBTdHlsZVNlbGVjdG9yLlxuY2xhc3MgT3ZlcnZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJvZHVjdFN0eWxlczogW10sXG4gICAgICBzZWxlY3RlZFN0eWxlOiB7fSxcbiAgICAgIHByb2R1Y3RJbmZvOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0eWxlKGUpIHtcbiAgICAvL2V2ZW50IGhhbmRsZXIgZnVuY3Rpb24gdG8gYmUgcGFzc2VkIGRvd24gdG8gc3R5bGUgc2VsZWN0b3IuXG4gICAgLy93aGVuIGEgbmV3IHNlbGVjdGlvbiBpcyBtYWRlIHRoaXMgd2lsbCBydW4gYW5kIHVwZGF0ZSB0aGUgc3RhdGUgYXMgbmVlZGVkXG4gIH1cblxuICBnZXRTdHlsZXMocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgdGhlIHN0eWxlcyBhdmFpbGFibGUgb24gc2luZ2xlL3NwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfS9zdHlsZXNgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0SW5mbyhwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCBwcm9kdWN0IGluZm8gZm9yIHNwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAse1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFkZFRvQ2FydCBza3VzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUuc2t1c30vPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiJdfQ==